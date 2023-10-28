interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>
      Message from {name} - {email}
    </h1>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
