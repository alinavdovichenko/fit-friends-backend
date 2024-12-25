import { RoleInputLabel, UserRole } from '../../consts';
import { useState } from 'react';
import { ChangeEvent } from 'react';

function RoleInput(): JSX.Element {
  const [userRole, setRole] = useState(UserRole.Default);

  return (
    <div className="sign-up__role">
      <h2 className="sign-up__legend">Выберите роль</h2>
      <div className="role-selector sign-up__role-selector">
        {Object.values(UserRole).map((role) => (
          <div className="role-btn" key={`role-${role}`}>
            <label>
              <input
                className="visually-hidden"
                type="radio"
                name="role"
                value={role}
                checked={role === userRole}
                onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                  setRole(target.value as UserRole);
                }}
              />
              <span className="role-btn__icon">
                <svg width={12} height={13} aria-hidden="true">
                  <use xlinkHref="#icon-cup" />
                </svg>
              </span>
              <span className="role-btn__btn">{RoleInputLabel[role]}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoleInput;
