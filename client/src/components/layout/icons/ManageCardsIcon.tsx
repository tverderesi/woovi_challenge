export default function ManageCards({
  scaleFactor = 1,
}: {
  scaleFactor?: number;
}) {
  const width = `${8 * scaleFactor}mm`;
  const height = `${24.0551 * scaleFactor}`;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      version='1.1'
      viewBox='0 0 16 12.73'
      style={{ verticalAlign: 'top' }}
    >
      <g transform='translate(-89.367 -93.965)'>
        <g
          fill='currentColor'
          transform='matrix(.80974 0 0 .80974 -241.815 -377.742)'
        >
          <g
            fill='currentColor'
            transform='translate(409 580.543)'
          >
            <path d='M1.5 2A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h9.64a1.269 1.269 0 01-.111-.511c0-.166.037-.332.103-.489H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v5.61c.167-.077.348-.117.528-.117.16 0 .32.034.472.095V3.5A1.5 1.5 0 0014.5 2z'></path>
            <path
              d='M7 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0zM7 9.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z'
              display='inline'
            ></path>
          </g>
          <g
            fill='currentColor'
            transform='matrix(.52908 0 0 .52908 420.295 589.799)'
          >
            <path
              d='M8 4.754a3.246 3.246 0 100 6.492 3.246 3.246 0 000-6.492zM5.754 8a2.246 2.246 0 114.492 0 2.246 2.246 0 01-4.492 0z'
              display='inline'
            ></path>
            <path
              d='M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 01-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 01-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 01.52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 011.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 011.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 01.52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 01-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 01-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 002.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 001.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 00-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 00-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 00-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 001.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 003.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 002.692-1.115z'
              display='inline'
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
