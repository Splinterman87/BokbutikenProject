namespace Bokbutiken_API
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public int Price { get; set; }
        public string Image { get; set; }

        public int Quantity { get; set; }

        public int AuthorId { get; set; }

        public Author? Author { get; set; }
    }
}
