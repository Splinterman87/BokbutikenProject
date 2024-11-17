using Microsoft.EntityFrameworkCore;

namespace Bokbutiken_API.Data
{
    public class BookstoreDbContext: DbContext
    {
 
            public BookstoreDbContext(DbContextOptions<BookstoreDbContext> options) : base(options) { }

            public DbSet<Book> Books { get; set; } = null!;

            public DbSet<Author> Authors { get; set; } = null!;

        

    }
}
