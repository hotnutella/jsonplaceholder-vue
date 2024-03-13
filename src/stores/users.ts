import { defineStore } from 'pinia';

interface UsersState {
    users: any[];
    loading: boolean;
    error?: Error | unknown;
}

export const useUsersStore = defineStore('users', {
    state: (): UsersState => ({
        users: [],
        loading: false,
        error: null,
    }),

    actions: {},
    getters: {
        async latestUsers(): Promise<UsersState['users']> {
            try {
                this.loading = true;
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();
                this.users = users;
                this.loading = false;
            } catch (error) {
                this.error = error;
                this.loading = false;
            }
            return this.users;
        }
    },
});
