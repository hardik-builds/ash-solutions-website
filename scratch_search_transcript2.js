const fs = require('fs');
const readline = require('readline');

const transcriptPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\19376032-2958-4f47-8c11-9beac0d676e9\\.system_generated\\logs\\transcript_full.jsonl';

async function search() {
  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let stepIdx = 0;
  for await (const line of rl) {
    stepIdx++;
    if (line.includes('home-client.js')) {
      try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
          for (let tc of obj.tool_calls) {
            if ((tc.name === 'write_to_file' || tc.name === 'replace_file_content') && tc.args.TargetFile && tc.args.TargetFile.includes('home-client.js')) {
              console.log(`Step ${stepIdx}: Tool ${tc.name}`);
              console.log(`  Length of Content: ${tc.args.CodeContent ? tc.args.CodeContent.length : (tc.args.ReplacementContent ? tc.args.ReplacementContent.length : 0)}`);
              const content = tc.args.CodeContent || tc.args.ReplacementContent || '';
              console.log(`  Preview: ${content.substring(0, 150).replace(/\n/g, ' ')}...`);
              
              // Let's write this to a file named scratch/extracted_home_step_${stepIdx}.js
              const outPath = `C:\\Users\\ACER\\.gemini\\antigravity\\brain\\19376032-2958-4f47-8c11-9beac0d676e9\\scratch\\extracted_home_step_${stepIdx}.js`;
              fs.writeFileSync(outPath, content, 'utf8');
              console.log(`  Wrote full code to ${outPath}`);
            }
          }
        }
      } catch (err) {
        // Ignored
      }
    }
  }
}

search();
