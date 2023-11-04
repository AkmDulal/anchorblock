import zxcvbn from 'zxcvbn';

const PasswordStrengthIndicator = ({ password } : any) => {
  const calculatePasswordStrength = () => {
    const result = zxcvbn(password);
    const strength = result.score; 

    const indicators = ['', '', '', '', ''];

    return (
      <div className='flex'>
        {indicators.map((indicator, index) => (
          <div key={index} className={` dot ${index <= strength ? 'green-dot' : ''}`}>
            {indicator}
          </div>
        ))}
      </div>
    );
  };

  return <div>{calculatePasswordStrength()}</div>;
};

export default PasswordStrengthIndicator;
