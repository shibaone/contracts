const ValidatorPermission = artifacts.require('ValidatorPermission');

contract('ValidatorPermission', (accounts) => {
  let validatorPermissionInstance;
  const owner = accounts[0];
  const validator = accounts[1];

  before(async () => {
    validatorPermissionInstance = await ValidatorPermission.new({ from: owner });
  });

  it('should update validators permission', async () => {
    const isWhitelisted = true;

    // Call the updateValidatorsPermission function from the contract
    await validatorPermissionInstance.updateValidatorsPermission(validator, isWhitelisted, { from: owner });

    // Retrieve the permission status for the validator
    const permissionStatus = await validatorPermissionInstance.validators(validator);

    // Assert that the permission status is as expected
    assert.equal(permissionStatus, isWhitelisted, 'Invalid permission status for the validator');

    // Retrieve the emitted event
    const events = await validatorPermissionInstance.getPastEvents('ValidatorUpdated');
    const event = events[0];

    // Assert that the emitted event has the correct properties
    assert.equal(event.args.validator, validator, 'Invalid validator address in the event');
    assert.equal(event.args.isWhitelisted, isWhitelisted, 'Invalid whitelisted status in the event');
  });

  it('should toggle validation', async () => {
    const validationEnabled = false;

    // Call the toggleValidation function from the contract
    await validatorPermissionInstance.toggleValidation(validationEnabled, { from: owner });

    // Retrieve the current validation status
    const currentValidationStatus = await validatorPermissionInstance.validationEnabled();

    // Assert that the current validation status is as expected
    assert.equal(currentValidationStatus, validationEnabled, 'Invalid validation status');
  });
});
