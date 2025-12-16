export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p className="mt-2 text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        {/* তোমার login form এখানে */}
        <div className="mt-8 bg-card rounded-xl shadow-lg p-8">
          <p className="text-center text-muted-foreground">Login Form Here</p>
          {/* Example placeholder */}
        </div>
      </div>
    </div>
  );
}
