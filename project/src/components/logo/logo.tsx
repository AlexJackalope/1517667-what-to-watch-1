interface ILogo {
  isLight: boolean
}

export function Logo({ isLight }: ILogo) {
  const classes = `logo__link ${isLight ? 'logo__link--light' : ''}`;
  return (
    <div className='logo'>
      <a href='main.html' className={classes}>
        {
          [
            ['W', 1], ['T', 2], ['W', 3]
          ].map((pair, index) => <span key={pair[1]} className={`logo__letter logo__letter--${pair[1]}`}>{pair[0]}</span>)
        }
      </a>
    </div>
  );
}
