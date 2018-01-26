export const required = value => {
  if (!value) {
    return "Required";
  }

  if (typeof value === "string" && value.trim().length === 0) {
    return "Required";
  }
};

export const maxLength = max => value =>
  !value || value.length <= max ? undefined : `Must be ${max} characters`;
