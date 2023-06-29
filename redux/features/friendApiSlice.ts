import { apiSlice } from '../services/apiSlice';

interface Events {
	name:string
	friend:number
	money:number
	created_on:string
	icon:string
}
interface FriendResponse {
	id:string
	name:string
	user:string
	sum: number
	birthday:string
	thumbnail:string,
	avatar:string,
	last_log:string,
	created_on:string,
	event:Events[],
	event_length:number,
}

interface FriendArgs {
	name:string
	user:string
	avatar:string
}

const friendApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		friendCreate: builder.mutation<FriendResponse,FriendArgs>({
			query: ({ name, user, avatar }) => ({
				url: '/friend-create/',
				method: 'POST',
				body: { name, user, avatar },
			}),
		}),
		getFriendList: builder.mutation<FriendResponse[], void>({
			query: () => ({
				url: '/user-friend/',
				method: 'POST',
			}),
		}),
		getFriendDetail: builder.mutation({
			query: (id) => ({
				url: `/friend-detail/${id}`,
				method: 'GET',
			}),
		}),
		updateBirthday: builder.mutation({
			query: ({year, month, day, id}) => ({
				url: '/logout/',
				method: 'POST',
				body: { year, month, day, id },
			}),
		}),
	}),
});

export const {
	useFriendCreateMutation,
	useGetFriendListMutation,
	useGetFriendDetailMutation,
	useUpdateBirthdayMutation,
} = friendApiSlice;