export default function SocialLink({ path, title, href }) {
  return (
    <a className="link" href={href} target="_blank" rel="noreferrer noopener">
      <svg
        className="h-6 fill-current text-gray-500 hover:text-blue-700"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title}</title>
        {path}
      </svg>
    </a>
  );
}
