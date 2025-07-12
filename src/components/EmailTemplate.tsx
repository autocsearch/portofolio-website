export function EmailTemplate({ name, email, message }: { name: string; email: string; message: string }) {
  return (
    <div>
      <h1>📬 New message from portfolio</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
