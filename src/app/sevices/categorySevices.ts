export async function fetchCategory(id: string) {
  try {
    const response = await fetch(`http://localhost:8000/api/category/${id}`);
    
    if (!response.ok) {
      console.error('Lỗi khi lấy dữ liệu:', response.statusText);
      return undefined;
    }

    const data = await response.json();
    console.log(data);  // In ra dữ liệu để kiểm tra cấu trúc

    if (!data || !data.data) {
      return undefined;
    }

    return data;
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    return undefined;
  }
}
