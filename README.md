# E-Commerce Platform - Backend RESTful API

This is a **real-world backend RESTful API** designed for an **E-commerce platform**. It is built using **Node.js** and **MongoDB**, offering features like **user authentication**, **product management**, **order handling**, **payment integration**, and **role-based access**. The API is fully capable of being integrated into both **mobile** and **web** applications for an **E-commerce store**.

---

## **Project Idea:**

This **E-commerce backend** project provides all the necessary functionalities to run an online store. It supports **user authentication**, **product catalog management**, **order management**, and **payment integration**. Users can browse, filter, and search for products, add them to their cart or wishlist, and place orders. Admins can manage products, users, and track orders efficiently. Additionally, the API integrates with **Stripe** for credit card payments and offers a **cash-on-delivery** option.

### **App Goal:**
- Enable users to browse products, add them to the cart, and place orders.
- Support **advanced search**, **pagination**, **sorting**, and **filtering** of products.
- Provide an **admin panel** to manage products, users, and orders.
- Implement **payment** options (including Stripe and Cash on Delivery).
- Handle **discount codes** and **star ratings** for products.
- Implement **email verification** and **password reset** functionality.

---

## **Main Features:**

### **1. Authentication & Authorization:**
- **User Registration & Login:**
  - Users can **register** and **login** via **JWT authentication** using email/password.
  - **Password reset** functionality with **OTP verification**.
  - **Email confirmation** upon registration.

- **Role-Based Access Control:**
  - Users are categorized into **Admin** and **Customer** roles, with admins having extra permissions to manage products, orders, and users.
  - The app ensures that only **authorized users** can access sensitive routes.

### **2. Product Management:**
- **Product CRUD:**
  - Admin users can **create**, **read**, **update**, and **delete** products.
  - Each product can have attributes like **name**, **price**, **category**, **brand**, **description**, and **images**.

- **Advanced Search & Filter:**
  - Users can search for products by **category**, **brand**, **name**, and **price range**.
  - **Sorting** by price, rating, and newest arrival.
  - **Pagination** to handle large product catalogs.

- **Product Ratings:**
  - Users can rate products using a **star rating system**.
  - Average rating is displayed alongside product details.

### **3. Cart & Wishlist:**
- **Add to Cart:**
  - Users can add products to their **cart**, modify quantities, or remove items.
  
- **Add to Wishlist:**
  - Users can save products to their **wishlist** for later purchase.

### **4. Order Management:**
- **Order Placement:**
  - Users can place orders and choose between **Cash on Delivery** or **Credit Card via Stripe** for payment.
  - Orders are tracked, and users can view their **order history**.

- **Order Processing for Admins:**
  - Admins can manage orders, change their status (e.g., pending, shipped), and track payment.

### **5. Discount Coupons:**
- Users can apply **discount codes** to their orders for special promotions.

### **6. Payment Integration:**
- **Stripe Payment Gateway:**
  - Integrated with **Stripe** for secure credit card payments.

- **Cash on Delivery:**
  - Allows users to select **Cash on Delivery** as a payment option.

### **7. Image Handling:**
- **Image Upload & Processing:**
  - Users can upload **product images** or their own images for profile purposes.
  - Uses **Cloudinary** for cloud image storage and management.

---

## **Tech Stack:**
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Payment Integration:** Stripe
- **Image Storage:** Cloudinary
- **File Upload:** Multer
- **Email Service:** Mailtrap
- **Validation:** Express-validator
- **Logging:** Morgan (for logging HTTP requests)
- **Error Handling:** Custom error handlers
- **Security:** Bcrypt (Password hashing), HTTPS, JWT tokens, and more

---

## **How It Works:**

### **For Customers:**
1. **Sign Up/Login:** Customers can register with their email.
2. **Browse Products:** Users can browse the product catalog, filter by category/brand, and sort by price or rating.
3. **Add to Cart/Wishlist:** Products can be added to the cart or saved to the wishlist.
4. **Place Order:** Users can proceed to checkout, apply discount codes, and choose payment methods (Cash on Delivery or Credit Card via Stripe).
5. **Order Tracking:** Customers can track their orders and view order history.

### **For Admins:**
1. **Product Management:** Admins can add, update, or delete products, and manage product details.
2. **Order Management:** Admins can manage the status of orders and track payments.
3. **User Management:** Admins can view customer details and modify user accounts.

---


## Installation & Setup


1. Clone the repository:
   ```
   git clone https://github.com/devnoranhamdy/E-commerce-API.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a .env file and configure the following variables:
   ```
 
   ```
  4. Start the server:
     ```
     npm start
     ```
   For development mode with auto-restart:
     ```
     npm run dev
     ```

---


## Error Handling

The API implements a consistent and structured error handling strategy to ensure clarity, ease of debugging, and a better developer experience.

```json
{
  "status": "error",
  "message": "Error description",
  "errors": ["Detailed error information"]
}
```

Success responses follow this format:

```json
{
  "status": "success",
  "message": "Operation successful",
  "data": {}
}
```

---

## Security Best Practices Implemented

- Password hashing with bcrypt
- HTTPS enforcement in production
- JWT with expiration times
- HTTP-only cookies for refresh tokens
- CORS protection
- Rate limiting
- Input validation and sanitization
- Protection against common security vulnerabilities (XSS, CSRF, etc.)

---


## Author

Noran Hamdy - [GitHub Profile](https://github.com/devnoranhamdy)

---

## Contributions

Contributions are welcome! Please feel free to submit a Pull Request.

