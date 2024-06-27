interface Props {
  message: string | undefined;
  className?: string;
}
const ErrorParagraph = ({ message, className }: Props) => {
  return (
    <p className={"text-red-400 text-sm" + " " + className}>
      *{message?.toLocaleLowerCase()}
    </p>
  );
};

export default ErrorParagraph;
