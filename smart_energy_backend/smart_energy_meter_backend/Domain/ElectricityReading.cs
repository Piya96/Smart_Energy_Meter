using System;
namespace smart_energy_meter_backend.Domain
{
    public class ElectricityReading
    {
        public DateTime Time { get; set; }
        public Decimal Reading { get; set; }
    }
}
