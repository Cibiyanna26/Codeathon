import styles from '../styles';

function NewFeatures({ imgUrl, title, subtitle }) {
  const formatSubtitle = (text) => {
    return text.split(/(₹\d+(,?\d{3})*)/g).map((part, index) => {
      if (/₹\d+(,?\d{3})*/.test(part)) {
        return (
          <span key={index} style={{ color: 'white', fontWeight: 'bold' }}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="flex-1 flex flex-col sm:min-w-[210px]">
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="mt-[26px] font-bold text-[28px] leading-[30px] text-white">
        {title}
      </h1>
      <p className="flex-1 mt-[20px] font-normal text-[26px] text-[#b0b0b0] leading-[32px]">
        {formatSubtitle(subtitle)}
      </p>
      <br />
    </div>
  );
}

export default NewFeatures;
