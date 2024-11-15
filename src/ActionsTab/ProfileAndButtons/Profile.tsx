import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Bell from '../../assets/Vector (31).svg'

export default function Profile() {
  return (
    <div className='flex gap-x-3'>
      <div className='flex relative'>
        <img src={Bell} alt="" />
        <div className='notifications rounded-full absolute left-2.5 top-4 font-bold flex items-center justify-center'>
          <p>5</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-y-0.5'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <svg
          className=''
          width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0019 0C13.8539 0 14.2989 0.986 13.7849 1.623L13.7089 1.707L7.70891 7.707C7.53671 7.87918 7.30761 7.98261 7.06459 7.99789C6.82156 8.01317 6.58131 7.93925 6.38891 7.79L6.29491 7.707L0.294907 1.707L0.211906 1.613L0.157907 1.536L0.103907 1.44L0.0869064 1.404L0.0599065 1.337L0.0279064 1.229L0.0179062 1.176L0.00790644 1.116L0.00390625 1.059V0.941L0.00890636 0.883L0.0179062 0.823L0.0279064 0.771L0.0599065 0.663L0.0869064 0.596L0.156907 0.464L0.221906 0.374L0.294907 0.293L0.388906 0.21L0.465907 0.156L0.561906 0.102L0.597907 0.085L0.664907 0.0579996L0.772906 0.026L0.825906 0.0159998L0.885906 0.00599957L0.942906 0.00199986L13.0019 0Z" fill="#6D6D6D" />
        </svg>
      </div>
    </div>
  )
}
