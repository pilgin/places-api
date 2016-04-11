import authentication from './authentication';
import user from './user';
import place from './place';

export default function services() {
    const app = this;

    app.configure(authentication)
		.configure(user)
		.configure(place);
};
