import { auth } from "@/lib/auth"
import prisma from "@/lib/db"
import { headers } from "next/headers"
import { Octokit } from 'octokit'


export async function getGithubToken() {
    const session = await auth.getSession({
        headers: await headers()
    });

    if (!session) {
        throw new Error("You are unauthorized");
    }

    const account = await prisma.account.findFirst({
        where: {
            userId: session.user.id,
            providerId: "github"
        }
    });

    if (!account || !account.accessToken) {
        throw new Error("No GitHub access token found");
    }

    return account.accessToken;
}


export async function fetchUserContribution(token: string, username: string) {
    const octokit = new Octokit({ auth: token });

    const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }
      }
    }
  `;

 interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}


 interface ContributionWeek {
  contributionDays: ContributionDay[];
}

 interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

 interface GitHubContributionResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: ContributionCalendar;
    };
  };
}
    try {
        const response: GitHubContributionResponse = await octokit.graphql(query, {
            username,
        });

        return response.user.contributionsCollection.contributionCalendar;
    } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
        throw new Error("Failed to fetch contribution data");
    }
}