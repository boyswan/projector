import * as Objects from 'objects';

export default props => Object.values(Objects).forEach(obj => obj(Object.assign(props)));
