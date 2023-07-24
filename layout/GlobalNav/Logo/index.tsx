import classNames from 'classnames';
import Image from 'next/image';

function Logo() {
  return (
    <div
      className={classNames(
        'p-2',

        'flex'
      )}
    >
      <Image
        src={'/reboot.jpeg'}
        width={30}
        height={30}
        alt={'logo'}
        className={classNames('rounded-md')}
      />
      <div className={classNames('ml-2', 'text-gray-200', 'font-bold')}>
        뽀삐
      </div>
    </div>
  );
}

export default Logo;
