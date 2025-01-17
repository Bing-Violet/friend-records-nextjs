import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { useUpdateUserMutation } from '@/redux/features/authApiSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { patchFriend } from '@/redux/features/friendSlice';

export default function useUserAvatarUpdate() {
    // const { data: user } = useRetrieveUserQuery();
    const [updateUser, { isLoading }] = useUpdateUserMutation();
    const dispatch = useAppDispatch()

    const [icon, setIcon] = useState('')
	const onChange = (icon:string) => {
		setIcon(icon)
	};

	const onSubmit = () => {
		updateUser({ avatar:icon })
			.unwrap()
			.then((res) => {
                dispatch(patchFriend(res))
				toast.success('Syccessfully updated!');
			})
			.catch((e) => {
				const firstErrorMsg = Object.values(e.data)[0]
				toast.error('Failed to update!' + '\n' + firstErrorMsg);
			});
	};

	return {
        icon,
        isLoading,
		onChange,
		onSubmit,
	};
}