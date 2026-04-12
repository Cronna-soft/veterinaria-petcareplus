export const FormStatusMessage = ({ type = "success", message = "" }) => {
  if (!message) return null

  const isSuccess = type === "success"

  return (
    <div
      className={`w-auto rounded-lg border border-x-7 px-4 py-3 bg-black/70 text-sm sm:text-base font-medium transition-all duration-300 ${
        isSuccess
          ? "border-green-500 text-green-400"
          : "border-red-600 text-red-400"
      }`}
      role="alert"
      aria-live="polite"
    >
      {message}
    </div>
  )
}