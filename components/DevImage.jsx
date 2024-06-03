import Image from 'next/image'

const DevImage = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill alt="dev image" />
    </div>
  )
}

export default DevImage
