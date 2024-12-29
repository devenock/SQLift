export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="bg-graydark p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold text-white mb-6">
          Verify Your Email
        </h1>
        <p className="text-gray-300 mb-4">
          We've sent a verification email to your inbox. Please click the link
          in the email to verify your account.
        </p>
        <p className="text-gray-400">
          If you don't see the email, please check your spam folder.
        </p>
      </div>
    </div>
  );
}
