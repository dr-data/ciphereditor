
import './logo.scss'
import { mulberry32 } from 'utils/random'
import { shuffleArray } from 'utils/array'
import { useState } from 'react'

const crossPath = 'M7.01444 8.83393L9.15162 11H11V9.15162L8.83393 6.98556L11 4.84838V3H9.15162L7.01444 5.16606L4.84838 3H3V4.84838L5.16606 6.98556L3 9.15162V11H4.84838L7.01444 8.83393Z'
const circlePath = 'M7 2.535C4.5361 2.535 2.536 4.54207 2.536 6.98546C2.536 9.42885 4.5361 11.465 7 11.465C9.46389 11.465 11.464 9.45794 11.464 6.98546C11.464 4.51298 9.43491 2.535 7 2.535Z'
const squarePath = 'M11 3H3V11H11V3Z'

export default function LogoView (props: {}): JSX.Element {
  const [seed, setSeed] = useState(0)
  const prng = mulberry32(seed)

  const positions = ['11,0', '22,0', '0,11', '0,22', '11,22', '22,22']
  shuffleArray(positions, prng)

  return (
    <button onClick={(evt) => setSeed(seed + 1)} className='logo'>
      <h1 className='logo__canvas'>
        <svg
          className='logo__svg'
          width='114'
          height='36'
          viewBox='0 0 114 36'
          role='img'
          aria-labelledby='app-logo-title'
        >
          <title id='app-logo-title'>cryptii</title>
          <path className='logo__svg-cross-1' transform={`translate(${positions[0]})`} d={crossPath} />
          <path className='logo__svg-cross-2' transform={`translate(${positions[1]})`} d={crossPath} />
          <path className='logo__svg-circle-1' transform={`translate(${positions[2]})`} d={circlePath} />
          <path className='logo__svg-circle-2' transform={`translate(${positions[3]})`} d={circlePath} />
          <path className='logo__svg-square-1' transform={`translate(${positions[4]})`} d={squarePath} />
          <path className='logo__svg-square-2' transform={`translate(${positions[5]})`} d={squarePath} />
          <path className='logo__svg-wordmark' d='M102.803 7.40977C101.817 7.40977 101.005 8.22217 101.005 9.20866C101.005 10.1951 101.817 11.0075 102.803 11.0075C103.79 11.0075 104.602 10.1951 104.602 9.20866C104.602 8.22217 103.79 7.40977 102.803 7.40977ZM93.9832 10.0791H96.9426V12.8645H99.2057V15.5048H96.9426V23.8319H93.9832V15.5048H91.9231V12.8645H93.9832V10.0791ZM63.9533 12.6323C63.402 12.6323 62.8798 12.7774 62.3575 13.0385C61.8353 13.2997 61.4 13.6768 61.0519 14.1411C60.9387 14.2543 60.8431 14.4029 60.7514 14.5454L60.7514 14.5455C60.7256 14.5856 60.7001 14.6251 60.6747 14.6633L60.6167 12.8644H57.7733V23.8319H60.7327V18.1451C60.7327 17.7969 60.7907 17.4777 60.9068 17.1876C61.0229 16.8974 61.1969 16.6363 61.4 16.4332C61.6031 16.2301 61.8643 16.056 62.1254 15.94C62.4155 15.8239 62.7057 15.7659 63.0539 15.7659C63.315 15.7659 63.5471 15.7949 63.7792 15.8529C64.0113 15.911 64.2144 15.998 64.3595 16.085L65.1429 12.8644C64.9978 12.8064 64.7947 12.7484 64.5916 12.7194C64.5279 12.7103 64.4642 12.6983 64.3996 12.6862C64.2582 12.6597 64.1126 12.6323 63.9533 12.6323ZM50.0845 15.6208C50.5197 15.3597 51.0129 15.2146 51.5932 15.2146C51.9414 15.2146 52.2896 15.2726 52.6377 15.3887C52.9859 15.5048 53.276 15.6788 53.5952 15.911C53.8853 16.1141 54.1175 16.3752 54.3206 16.6363L55.9454 14.6924C55.4811 14.054 54.8428 13.5608 54.0304 13.2126C53.218 12.8645 52.3186 12.6614 51.3321 12.6614C50.2876 12.6614 49.3301 12.9225 48.5177 13.4157C47.6763 13.909 47.038 14.5763 46.5447 15.4467C46.0805 16.3172 45.8194 17.2746 45.8194 18.3772C45.8194 19.4797 46.0515 20.4372 46.5447 21.3076C47.009 22.1781 47.6763 22.8454 48.5177 23.3386C49.3591 23.8319 50.2876 24.093 51.3321 24.093C52.2605 24.093 53.131 23.9189 53.9724 23.5417C54.8138 23.1645 55.4521 22.7003 55.9164 22.091L54.3206 20.1471C54.0884 20.4372 53.8273 20.6983 53.5372 20.9014C53.247 21.1045 52.9569 21.2496 52.6377 21.3657C52.5399 21.3745 52.4394 21.3862 52.337 21.398L52.3369 21.398L52.3369 21.398L52.3369 21.398L52.3369 21.398L52.3368 21.398L52.3368 21.398L52.3368 21.398C52.1051 21.4248 51.8636 21.4527 51.6222 21.4527C51.071 21.4527 50.5777 21.3076 50.1425 21.0465C49.7073 20.7564 49.3591 20.4082 49.098 19.9149C48.8369 19.4507 48.7208 18.9284 48.7208 18.3482C48.7208 17.7389 48.8369 17.1876 49.098 16.7234C49.3011 16.2591 49.6493 15.8819 50.0845 15.6208ZM72.1372 19.5939C72.1644 19.5107 72.1924 19.4246 72.2224 19.3347L74.5145 12.8935H77.8802L73.2669 23.8609L71.381 28.6192H68.3925L70.4525 23.8029L65.4911 12.8645H68.8277L71.497 19.1896C71.5932 19.3819 71.6694 19.5941 71.7588 19.8427L71.7588 19.8428C71.7773 19.8942 71.7963 19.9473 71.8162 20.002L71.9033 20.2631C71.9893 20.0479 72.0594 19.8328 72.1372 19.5939ZM88.2963 13.3867C87.542 12.8935 86.7006 12.6614 85.7431 12.6614C85.1338 12.6614 84.5245 12.7774 83.9732 13.0095C83.3929 13.2416 82.9287 13.5608 82.5515 13.909C82.4645 13.996 82.4064 14.0831 82.3484 14.1701L82.2904 12.8354H79.447V28.3871H82.4064V22.5843C82.4161 22.5939 82.4225 22.6036 82.429 22.6133C82.4419 22.6326 82.4548 22.652 82.4935 22.6713C82.8997 23.0775 83.3639 23.3967 83.9442 23.6288C84.5245 23.8609 85.1338 24.006 85.7721 24.006C86.7296 24.006 87.571 23.7738 88.3254 23.2806C89.0797 22.7874 89.66 22.12 90.0952 21.2496C90.5304 20.3792 90.7335 19.4217 90.7335 18.3191C90.7335 17.2166 90.5304 16.2301 90.0952 15.3887C89.631 14.5473 89.0507 13.88 88.2963 13.3867ZM87.4839 20.002C87.2518 20.4662 86.9327 20.8434 86.4975 21.1045C86.0913 21.3657 85.598 21.5107 85.0757 21.5107C84.5245 21.5107 84.0312 21.3657 83.625 21.1045C83.2188 20.8434 82.8997 20.4662 82.6385 20.002C82.4064 19.5378 82.2904 18.9865 82.2904 18.3482C82.2904 17.7389 82.4064 17.1876 82.6385 16.6943C82.8707 16.2301 83.1898 15.8529 83.625 15.5918C84.0312 15.3307 84.5245 15.2146 85.0757 15.2146C85.627 15.2146 86.1203 15.3597 86.5265 15.6208C86.9327 15.8819 87.2518 16.2591 87.4839 16.7234C87.7161 17.1876 87.8321 17.7389 87.8321 18.3482C87.8611 18.9575 87.7451 19.5087 87.4839 20.002ZM104.283 12.8645H101.353V23.8319H104.283V12.8645ZM107.707 12.8645H110.637V23.8319H107.707V12.8645ZM110.957 9.23765C110.957 10.2241 110.144 11.0365 109.158 11.0365C108.171 11.0365 107.359 10.2241 107.359 9.23765C107.359 8.25117 108.171 7.43877 109.158 7.43877C110.144 7.43877 110.957 8.25117 110.957 9.23765Z' />
        </svg>
      </h1>
    </button>
  )
}
