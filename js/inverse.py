import numpy as np

def calculate_inverse(matrix):
    try:
        inverse_matrix = np.linalg.inv(matrix)
        return inverse_matrix
    except np.linalg.LinAlgError:
        # If the matrix is not invertible, handle the exception here
        return None

# Example matrix (replace with your own)
matrix = np.array([[-2.5, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                   [1, 4.1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                   [0, 1, -4.1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                   [1, 0, 0, -4, 2, 0, 1, 0, 0, 0, 0, 0],
                   [0, 2, 0, 2, -8, 2, 0, 2, 0, 0, 0, 0],
                   [0, 0, 2, 0, 2, -8, 0, 0, 2, 0, 0, 0],
                   [1, 0, 0, 1, 0, 0, -4, 2, 0, 1, 0, 0],
                   [0, 0, 0, 0, 2, 0, 2, -8, 2, 0, 2, 0],
                   [0, 0, 0, 0, 0, 2, 0, 2, -8, 0, 0, 2],
                   [0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 1, 0],
                   [0, 0, 0, 0, 0, 0, 0, 2, 0, 1, -4, 1],
                   [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, -4]])

inverse = calculate_inverse(matrix)

if inverse is not None:
    print("Inverse matrix:")
    print(inverse)
else:
    print("The matrix is not invertible.")
