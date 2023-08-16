// seems like a shitpost was made on a hurry
using HtmlAgilityPack; 
using System; 
using System.Linq; 
using System.Net.Http; 
using System.Threading.Tasks;

class Program
{
    private static readonly HttpClient Client = new HttpClient();

    static async Task Main()
    {
        var urls = new[] { $"https://flux.li/windows/start.php?updated_browser=true&HWID=e68e118614a311eeb4d2806e6f6e6963685903ef83f7a7c8a165f77eed160d9e", "https://fluxteam.net/windows/checkpoint/check1.php", "https://fluxteam.net/windows/checkpoint/check2.php", "https://fluxteam.net/windows/checkpoint/main.php" };
        // requests 
        var responsetasks = urls.Select(Request);
        // going thru checkpoints
        var document = new HtmlDocument();
        foreach (var responsetask in responsetasks)
        Console.WriteLine($"Bypassed {(await responsetask).Url}\n");
        // getting the key 
        document.LoadHtml((await Request(urls.Last())).Content);
        Console.WriteLine($"\nYour key is: {document.DocumentNode.SelectSingleNode("//main/code[2]")?.InnerText.Trim() ?? "(unknown error)"}\nPress any key to exit...");
        Console.ReadKey();
    }

    static async Task<Response> Request(string url)
    {
        Client.DefaultRequestHeaders.Clear();
        // setting header (to not get banned)
        Client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36");
        // header reffer to 
        Client.DefaultRequestHeaders.Referrer = new Uri("https://linkvertise.com/");
        return new Response(url, await Client.GetStringAsync(url));
    }

    class Response
    {
        public string Url { get; }
        public string Content { get; }
        public Response(string url, string content) => (Url, Content) = (url, content);
    }
}