// base URL ของ backend API
const API_URL = "http://localhost:4000/api";

// ฟังก์ชัน register
function registerUser(data, onSuccess, onError) {
  $.ajax({
    url: `${API_URL}/auth/register`,
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: onSuccess,
    error: (xhr) => onError(xhr.responseJSON?.error || "Error"),
  });
}

// ฟังก์ชัน login
function loginUser(data, onSuccess, onError) {
  $.ajax({
    url: `${API_URL}/auth/login`,
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: onSuccess,
    error: (xhr) => onError(xhr.responseJSON?.error || "Error"),
  });
}

// ฟังก์ชันดึง profile
function getProfile(token, onSuccess, onError) {
  $.ajax({
    url: `${API_URL}/profile`,
    method: "GET",
    headers: { Authorization: "Bearer " + token },
    success: onSuccess,
    error: (xhr) => onError(xhr.responseJSON?.error || "Error"),
  });
}

// ฟังก์ชันอัพเดท profile
function updateProfile(token, data, onSuccess, onError) {
  $.ajax({
    url: `${API_URL}/profile`,
    method: "PUT",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + token },
    data: JSON.stringify(data),
    success: onSuccess,
    error: (xhr) => onError(xhr.responseJSON?.error || "Error"),
  });
}

// LOGOUT
function logoutUser() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

