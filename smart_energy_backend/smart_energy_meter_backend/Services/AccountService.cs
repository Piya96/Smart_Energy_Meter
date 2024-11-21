using System;
using System.Collections.Generic;
using smart_energy_meter_backend.Enums;

namespace smart_energy_meter_backend.Services
{
    public class AccountService : IAccountService
    { 
        private Dictionary<string, string> _smartMeterToPricePlanAccounts;

        public AccountService(Dictionary<string, string> smartMeterToPricePlanAccounts) {
            _smartMeterToPricePlanAccounts = smartMeterToPricePlanAccounts;
        }

        public string GetPricePlanIdForSmartMeterId(string smartMeterId) {
            if (!_smartMeterToPricePlanAccounts.ContainsKey(smartMeterId))
            {
                return null;
            }
            return _smartMeterToPricePlanAccounts[smartMeterId];
        }
    }
}
