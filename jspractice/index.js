// Properties: _name, _remainingVacationDays (set to 20 inside the constructor()), _insurance
// Methods: .takeVacationDays()
class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
  
    get name() {
      return this._name;
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
  
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  