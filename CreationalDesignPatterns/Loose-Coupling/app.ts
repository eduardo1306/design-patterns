import { JsonExportServices } from './json-export-services';
import { MockPostServices } from './mock-posts-service';

let mockService = new MockPostServices()

mockService.export(new JsonExportServices).then(posts => console.log(posts));
