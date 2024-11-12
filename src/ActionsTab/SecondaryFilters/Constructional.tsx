import { Button } from "@/components/ui/button"
import './SecondaryFilters.scss'

export default function Constructional() {
    return (
        <div className='secondary_filets_left flex gap-x-2'>
            <Button className="flex items-center gap-x-1 bg-white relative top-px p-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13C6.6 5 17.4 5 21 13" stroke="#2495D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 17C11.606 17 11.2159 16.9224 10.8519 16.7716C10.488 16.6209 10.1573 16.3999 9.87868 16.1213C9.6001 15.8427 9.37913 15.512 9.22836 15.1481C9.0776 14.7841 9 14.394 9 14C9 13.606 9.0776 13.2159 9.22836 12.8519C9.37913 12.488 9.6001 12.1573 9.87868 11.8787C10.1573 11.6001 10.488 11.3791 10.8519 11.2284C11.2159 11.0776 11.606 11 12 11C12.7956 11 13.5587 11.3161 14.1213 11.8787C14.6839 12.4413 15 13.2044 15 14C15 14.7956 14.6839 15.5587 14.1213 16.1213C13.5587 16.6839 12.7956 17 12 17Z" stroke="#2495D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Progress izləmə</span>
            </Button>
            <Button className="flex items-center gap-x-1 bg-white relative top-px p-1">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 3.5C2.5 3.10218 2.65804 2.72064 2.93934 2.43934C3.22064 2.15804 3.60218 2 4 2H5C5.39782 2 5.77936 2.15804 6.06066 2.43934C6.34196 2.72064 6.5 3.10218 6.5 3.5V4.5C6.5 4.89782 6.34196 5.27936 6.06066 5.56066C5.77936 5.84196 5.39782 6 5 6H4C3.60218 6 3.22064 5.84196 2.93934 5.56066C2.65804 5.27936 2.5 4.89782 2.5 4.5V3.5ZM4 3C3.86739 3 3.74021 3.05268 3.64645 3.14645C3.55268 3.24021 3.5 3.36739 3.5 3.5V4.5C3.5 4.63261 3.55268 4.75979 3.64645 4.85355C3.74021 4.94732 3.86739 5 4 5H5C5.13261 5 5.25979 4.94732 5.35355 4.85355C5.44732 4.75979 5.5 4.63261 5.5 4.5V3.5C5.5 3.36739 5.44732 3.24021 5.35355 3.14645C5.25979 3.05268 5.13261 3 5 3H4ZM2.5 9.5C2.5 9.10218 2.65804 8.72064 2.93934 8.43934C3.22064 8.15804 3.60218 8 4 8H5C5.39782 8 5.77936 8.15804 6.06066 8.43934C6.34196 8.72064 6.5 9.10218 6.5 9.5V10.5C6.5 10.8978 6.34196 11.2794 6.06066 11.5607C5.77936 11.842 5.39782 12 5 12H4C3.60218 12 3.22064 11.842 2.93934 11.5607C2.65804 11.2794 2.5 10.8978 2.5 10.5V9.5ZM4 9C3.86739 9 3.74021 9.05268 3.64645 9.14645C3.55268 9.24021 3.5 9.36739 3.5 9.5V10.5C3.5 10.6326 3.55268 10.7598 3.64645 10.8536C3.74021 10.9473 3.86739 11 4 11H5C5.13261 11 5.25979 10.9473 5.35355 10.8536C5.44732 10.7598 5.5 10.6326 5.5 10.5V9.5C5.5 9.36739 5.44732 9.24021 5.35355 9.14645C5.25979 9.05268 5.13261 9 5 9H4ZM2.5 15.5C2.5 15.1022 2.65804 14.7206 2.93934 14.4393C3.22064 14.158 3.60218 14 4 14H5C5.39782 14 5.77936 14.158 6.06066 14.4393C6.34196 14.7206 6.5 15.1022 6.5 15.5V16.5C6.5 16.8978 6.34196 17.2794 6.06066 17.5607C5.77936 17.842 5.39782 18 5 18H4C3.60218 18 3.22064 17.842 2.93934 17.5607C2.65804 17.2794 2.5 16.8978 2.5 16.5V15.5ZM4 15C3.86739 15 3.74021 15.0527 3.64645 15.1464C3.55268 15.2402 3.5 15.3674 3.5 15.5V16.5C3.5 16.6326 3.55268 16.7598 3.64645 16.8536C3.74021 16.9473 3.86739 17 4 17H5C5.13261 17 5.25979 16.9473 5.35355 16.8536C5.44732 16.7598 5.5 16.6326 5.5 16.5V15.5C5.5 15.3674 5.44732 15.2402 5.35355 15.1464C5.25979 15.0527 5.13261 15 5 15H4ZM8.5 4.5C8.5 4.36739 8.55268 4.24021 8.64645 4.14645C8.74021 4.05268 8.86739 4 9 4H18C18.1326 4 18.2598 4.05268 18.3536 4.14645C18.4473 4.24021 18.5 4.36739 18.5 4.5C18.5 4.63261 18.4473 4.75979 18.3536 4.85355C18.2598 4.94732 18.1326 5 18 5H9C8.86739 5 8.74021 4.94732 8.64645 4.85355C8.55268 4.75979 8.5 4.63261 8.5 4.5ZM8.5 10.5C8.5 10.3674 8.55268 10.2402 8.64645 10.1464C8.74021 10.0527 8.86739 10 9 10H18C18.1326 10 18.2598 10.0527 18.3536 10.1464C18.4473 10.2402 18.5 10.3674 18.5 10.5C18.5 10.6326 18.4473 10.7598 18.3536 10.8536C18.2598 10.9473 18.1326 11 18 11H9C8.86739 11 8.74021 10.9473 8.64645 10.8536C8.55268 10.7598 8.5 10.6326 8.5 10.5ZM8.5 16.5C8.5 16.3674 8.55268 16.2402 8.64645 16.1464C8.74021 16.0527 8.86739 16 9 16H18C18.1326 16 18.2598 16.0527 18.3536 16.1464C18.4473 16.2402 18.5 16.3674 18.5 16.5C18.5 16.6326 18.4473 16.7598 18.3536 16.8536C18.2598 16.9473 18.1326 17 18 17H9C8.86739 17 8.74021 16.9473 8.64645 16.8536C8.55268 16.7598 8.5 16.6326 8.5 16.5Z" fill="#D3AB1D" />
                </svg>
                <span>Plan & Faktiki</span>
            </Button>
            <Button className="flex items-center gap-x-1 bg-white relative top-px p-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.9 3.60001H17.1C17.9752 3.60001 18.8146 3.94768 19.4335 4.56655C20.0523 5.18542 20.4 6.02479 20.4 6.90001V17.1C20.4 17.9752 20.0523 18.8146 19.4335 19.4335C18.8146 20.0523 17.9752 20.4 17.1 20.4H12.1452L10.9452 19.2H17.1C17.657 19.2 18.1911 18.9788 18.5849 18.5849C18.9788 18.1911 19.2 17.657 19.2 17.1V6.90001C19.2 6.34305 18.9788 5.80891 18.5849 5.41508C18.1911 5.02126 17.657 4.80001 17.1 4.80001H6.9C6.34305 4.80001 5.8089 5.02126 5.41508 5.41508C5.02125 5.80891 4.8 6.34305 4.8 6.90001V10.8324C4.39079 10.8784 3.98817 10.971 3.6 11.1084V6.90001C3.6 6.02479 3.94768 5.18542 4.56655 4.56655C5.18542 3.94768 6.02479 3.60001 6.9 3.60001ZM11.4 16.8C11.2409 16.8 11.0883 16.7368 10.9757 16.6243C10.8632 16.5117 10.8 16.3591 10.8 16.2C10.8 16.0409 10.8632 15.8883 10.9757 15.7757C11.0883 15.6632 11.2409 15.6 11.4 15.6H16.2C16.3591 15.6 16.5117 15.6632 16.6243 15.7757C16.7368 15.8883 16.8 16.0409 16.8 16.2C16.8 16.3591 16.7368 16.5117 16.6243 16.6243C16.5117 16.7368 16.3591 16.8 16.2 16.8H11.4ZM9 8.70001C9 8.9387 8.90518 9.16762 8.7364 9.3364C8.56761 9.50518 8.3387 9.60001 8.1 9.60001C7.86131 9.60001 7.63239 9.50518 7.4636 9.3364C7.29482 9.16762 7.2 8.9387 7.2 8.70001C7.2 8.46131 7.29482 8.23239 7.4636 8.06361C7.63239 7.89483 7.86131 7.80001 8.1 7.80001C8.3387 7.80001 8.56761 7.89483 8.7364 8.06361C8.90518 8.23239 9 8.46131 9 8.70001ZM11.4 8.40001C11.2409 8.40001 11.0883 8.46322 10.9757 8.57574C10.8632 8.68826 10.8 8.84088 10.8 9.00001C10.8 9.15914 10.8632 9.31175 10.9757 9.42427C11.0883 9.53679 11.2409 9.60001 11.4 9.60001H16.2C16.3591 9.60001 16.5117 9.53679 16.6243 9.42427C16.7368 9.31175 16.8 9.15914 16.8 9.00001C16.8 8.84088 16.7368 8.68826 16.6243 8.57574C16.5117 8.46322 16.3591 8.40001 16.2 8.40001H11.4ZM11.4 12C11.2409 12 11.0883 12.0632 10.9757 12.1757C10.8632 12.2883 10.8 12.4409 10.8 12.6C10.8 12.7591 10.8632 12.9117 10.9757 13.0243C11.0883 13.1368 11.2409 13.2 11.4 13.2H16.2C16.3591 13.2 16.5117 13.1368 16.6243 13.0243C16.7368 12.9117 16.8 12.7591 16.8 12.6C16.8 12.4409 16.7368 12.2883 16.6243 12.1757C16.5117 12.0632 16.3591 12 16.2 12H11.4ZM5.4 20.4C6.3432 20.4 7.2144 20.088 7.9152 19.5636L10.9752 22.6236C11.0309 22.6794 11.0971 22.7237 11.1699 22.7539C11.2427 22.7841 11.3207 22.7997 11.3996 22.7997C11.4784 22.7998 11.5565 22.7843 11.6293 22.7542C11.7022 22.7241 11.7684 22.6799 11.8242 22.6242C11.88 22.5685 11.9243 22.5023 11.9545 22.4295C11.9847 22.3567 12.0003 22.2787 12.0003 22.1998C12.0004 22.121 11.9849 22.0429 11.9548 21.9701C11.9247 21.8972 11.8805 21.831 11.8248 21.7752L8.7648 18.7152C9.33121 17.9577 9.62537 17.0313 9.59965 16.0858C9.57393 15.1403 9.22983 14.2312 8.62307 13.5056C8.01631 12.7801 7.18242 12.2806 6.25641 12.088C5.3304 11.8954 4.3665 12.021 3.52077 12.4445C2.67504 12.868 1.997 13.5645 1.59644 14.4213C1.19589 15.2781 1.09626 16.2451 1.3137 17.1655C1.53113 18.086 2.0529 18.9062 2.79452 19.4932C3.53613 20.0802 4.45418 20.3997 5.4 20.4ZM5.4 19.2C4.60435 19.2 3.84129 18.8839 3.27868 18.3213C2.71607 17.7587 2.4 16.9957 2.4 16.2C2.4 15.4044 2.71607 14.6413 3.27868 14.0787C3.84129 13.5161 4.60435 13.2 5.4 13.2C6.19565 13.2 6.95871 13.5161 7.52132 14.0787C8.08393 14.6413 8.4 15.4044 8.4 16.2C8.4 16.9957 8.08393 17.7587 7.52132 18.3213C6.95871 18.8839 6.19565 19.2 5.4 19.2Z" fill="#AF2082" />
                </svg>
                <span>Detallar</span>
            </Button>
        </div>
    )
}
