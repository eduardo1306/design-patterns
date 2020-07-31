import { JSONExportServices } from './json-export-services';
import { MockPostServices } from './mock-posts-service';

let mockService = new MockPostServices()

mockService.export(new JSONExportServices).then(posts => console.log(posts));
