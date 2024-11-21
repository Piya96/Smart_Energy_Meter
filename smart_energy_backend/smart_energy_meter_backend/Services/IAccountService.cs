using smart_energy_meter_backend.Enums;

namespace smart_energy_meter_backend.Services
{
    public interface IAccountService
    {
        string GetPricePlanIdForSmartMeterId(string smartMeterId);
    }
}