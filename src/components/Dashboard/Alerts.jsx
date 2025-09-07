import React from "react";
import { AlertTriangle } from "lucide-react";

const Alerts = ({ alerts }) => {
  
  if (!alerts || alerts.length === 0) {
    return null;
  }

  return (
    <div className="col-span-12">
      <div className="bg-orange-400 border border-red-400 text-white p-3 rounded-lg shadow-lg">

        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 mr-3" />

          <div>
            {alerts.map((alert, i) => (
              <p key={i} className="font-semibold">
                {alert}
              </p>
            ))}
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Alerts;
