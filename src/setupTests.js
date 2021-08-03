import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
<<<<<<< HEAD
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

=======
import { createSerializer } from 'enzyme-to-json';


Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
>>>>>>> a7f4a428716250b39c04779b52a486c13c642ba7
