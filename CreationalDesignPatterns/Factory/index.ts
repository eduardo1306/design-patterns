import { ShippingCompany } from './shipping-factory';

ShippingCompany.getTruck().deliver(); // Shipping by the road;
ShippingCompany.getBoat().deliver(); // Works great! All those characteristic are available.

