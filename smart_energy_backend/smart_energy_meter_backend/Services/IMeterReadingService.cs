using System.Collections.Generic;
using smart_energy_meter_backend.Domain;

namespace smart_energy_meter_backend.Services
{
    public interface IMeterReadingService
    {
        List<ElectricityReading> GetReadings(string smartMeterId);
        void StoreReadings(string smartMeterId, List<ElectricityReading> electricityReadings);
    }
}