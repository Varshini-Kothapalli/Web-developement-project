import  { useState } from "react";

function BudgetPlanner() {

  const [days, setDays] = useState(0);
  const [plan, setPlan] = useState([]);
  const [result, setResult] = useState(null);

  const placesList = [
    "Charminar",
    "Golconda Fort",
    "Ramoji Film City",
    "Hussain Sagar Lake",
    "Chowmahalla Palace"
  ];

  // Handle number of days
  const handleDaysChange = (e) => {
    const selectedDays = Number(e.target.value);
    setDays(selectedDays);

    const newPlan = [];
    for (let i = 1; i <= selectedDays; i++) {
      newPlan.push({ day: i, places: [] });
    }
    setPlan(newPlan);
  };

  // Handle checkbox selection
  const handlePlaceChange = (dayIndex, place) => {
    const updatedPlan = [...plan];

    if (updatedPlan[dayIndex].places.includes(place)) {
      updatedPlan[dayIndex].places =
        updatedPlan[dayIndex].places.filter(p => p !== place);
    } else {
      updatedPlan[dayIndex].places.push(place);
    }

    setPlan(updatedPlan);
  };

  // Send to backend
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/budget-api/budgetplanner",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ plan })
        }
      );

      const data = await response.json();
      setResult(data);

    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="p-5">
      <h2>Budget Planner</h2>

      <div style={{ marginBottom: "20px" }}>
        <label>Trip Duration (Days): </label>
        <input
          type="number"
          min="1"
          onChange={handleDaysChange} className="form-control w-25"
        />
      </div>

      {plan.map((dayPlan, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h4>Day {dayPlan.day}</h4>

          {placesList.map((place) => (
            <div key={place}>
              <input
                type="checkbox"
                onChange={() => handlePlaceChange(index, place)}
                className="form-check-input me-2"
              />
              {place}
            </div>
          ))}
        </div>
      ))}

      {days > 0 && (
        <button onClick={handleSubmit} className="btn btn-primary">
          Calculate Budget
        </button>
      )}

      {result && (
        <div className="mt-4">
          <h3>Total Budget: ₹{result.payload}</h3>

          <h4>Breakdown:</h4>

          {result.breakdown.map((item, i) => (
            <div key={i}>
              <p>
                Day {item.day} → ₹{item.total_cost}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BudgetPlanner;
