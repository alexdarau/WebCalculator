using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GUI
{
    public partial class Form1 : Form
    {
        System.Diagnostics.Process cmd = new System.Diagnostics.Process();
        System.Diagnostics.ProcessStartInfo startInfo = new System.Diagnostics.ProcessStartInfo();

        public Form1()
        {
            
            InitializeComponent();
            cmd.StartInfo.RedirectStandardInput = true;
            cmd.StartInfo.RedirectStandardOutput = true;
            startInfo.WindowStyle = System.Diagnostics.ProcessWindowStyle.Normal;
            startInfo.WorkingDirectory = @"D:\Poli\An4\VVS\WebCalculator\";
            startInfo.FileName = "cmd.exe";
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string strCmdText;
            strCmdText = "/c cd ../../../../../WebCalculator & node app.js";
            startInfo.Arguments = @"/c node app.js";
            cmd.StartInfo = startInfo;
            cmd.Start();

        }

        private void button2_Click(object sender, EventArgs e)
        {
            foreach (var node in Process.GetProcessesByName("node"))
            {
                node.Kill();
            }

            cmd.Kill();
            //Process.Start(startInfo);

        }
    }
}
