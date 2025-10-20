interface BoxIconProps {
  label: string;
  url: string;
  className: string;
}
export const BoxIcon: React.FC<BoxIconProps> = ({
  label,
  url: initialUrl,
  className,
}) => {
  const WORDS_TO_REPLACE = ["mailto:", "tel:"];
  let dataPrint = WORDS_TO_REPLACE.reduce(
    (acc, word) => acc.replace(word, ""),
    initialUrl
  );

  if (initialUrl.startsWith("http")) {
    const parts = dataPrint.split("/").filter(Boolean);
    dataPrint = "@" + parts[parts.length - 1];
  }

  return (
    <a
      href={initialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="social__link"
      title={label}
      data-print={dataPrint}
    >
      <i className={`bx ${className} social__icon`} />
    </a>
  );
};
