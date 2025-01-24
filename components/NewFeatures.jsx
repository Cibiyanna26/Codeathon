import styles from '../styles';

function NewFeatures({ imgUrl, title, subtitle }) {
  // Function to wrap the amounts with bold tags
  const formatSubtitle = (text) => {
    return text.replace(/₹\d+(,?\d{3})*/g, (match) => `<b>${match}</b>`);
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
      <p
        className="flex-1 mt-[20px] font-normal text-[26px] text-[#b0b0b0] leading-[32px]"
        dangerouslySetInnerHTML={{ __html: formatSubtitle(subtitle) }}
      />
      <br />
    </div>
  );
}

export default NewFeatures;
