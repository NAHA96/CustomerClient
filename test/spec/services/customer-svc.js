'use strict';

describe('Service: customerSvc', function () {

  // load the service's module
  beforeEach(module('customerClientApp'));

  // instantiate service
  var customerSvc;
  beforeEach(inject(function (_customerSvc_) {
    customerSvc = _customerSvc_;
  }));

  it('should do something', function () {
    expect(!!customerSvc).toBe(true);
  });

});
