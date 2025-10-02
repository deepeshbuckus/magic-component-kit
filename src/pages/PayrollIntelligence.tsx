import { Search, DollarSign, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    title: "Q4 Payroll Summary Report",
    lastRun: "01/18/2024",
    description: "Comprehensive quarterly payroll analysis including salary distributions, overtime costs, and tax withholdings.",
  },
  {
    title: "Employee Benefits Analysis",
    lastRun: "01/16/2024",
    description: "Detailed breakdown of healthcare, retirement contributions, and other employee benefits costs.",
  },
  {
    title: "Monthly Attendance Report",
    lastRun: "01/14/2024",
    description: "Analysis of employee attendance patterns, PTO usage, and overtime trends across departments.",
  },
  {
    title: "Workforce Demographics Study",
    lastRun: "01/12/2024",
    description: "Comprehensive demographic analysis including diversity metrics, age distribution, and tenure statistics.",
  },
  {
    title: "Compensation Benchmarking Report",
    lastRun: "01/09/2024",
    description: "Market comparison of salary ranges, bonus structures, and total compensation packages.",
  },
  {
    title: "Performance Review Analytics",
    lastRun: "01/07/2024",
    description: "Statistical analysis of performance ratings, goal completion rates, and promotion trends.",
  },
];

const PayrollIntelligence = () => {
  const handleCategoryClick = (category: string) => {
    console.log('Category clicked:', category);
  };

  const handleSearch = (event: any) => {
    console.log('Search submitted:', event.detail);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <DollarSign className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold">Payroll Intelligence</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b bg-muted/20 py-12">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              Transform payroll data into insights with AI
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Ask simple questions, get detailed reports. Analyze your payroll history, earnings & deductions,
              employee profiles, and more.
            </p>

            {/* Category Pills */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
              <ds-category-pill
                color="hsl(210, 100%, 95%)"
                textColor="hsl(210, 100%, 40%)"
                border="1px solid hsl(210, 100%, 90%)"
                onDsClick={() => handleCategoryClick('Payroll Insights')}
              >
                <span slot="icon">
                  <DollarSign className="h-4 w-4" style={{ color: 'hsl(210, 100%, 40%)' }} />
                </span>
                <span slot="text">Payroll Insights</span>
              </ds-category-pill>
              
              <ds-category-pill
                color="hsl(210, 100%, 95%)"
                textColor="hsl(210, 100%, 40%)"
                border="1px solid hsl(210, 100%, 90%)"
                onDsClick={() => handleCategoryClick('Workforce Reports')}
              >
                <span slot="icon">
                  <Users className="h-4 w-4" style={{ color: 'hsl(210, 100%, 40%)' }} />
                </span>
                <span slot="text">Workforce Reports</span>
              </ds-category-pill>
              
              <ds-category-pill
                color="hsl(210, 100%, 95%)"
                textColor="hsl(210, 100%, 40%)"
                border="1px solid hsl(210, 100%, 90%)"
                onDsClick={() => handleCategoryClick('Trend Analysis')}
              >
                <span slot="icon">
                  <TrendingUp className="h-4 w-4" style={{ color: 'hsl(210, 100%, 40%)' }} />
                </span>
                <span slot="text">Trend Analysis</span>
              </ds-category-pill>
            </div>

            {/* Search Bar */}
            <div className="mx-auto max-w-2xl">
              <ds-search-bar
                placeholder="Ask for a custom payroll report"
                buttonLabel="Submit"
                onDsSubmit={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Reports Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="mb-8 flex items-center gap-2 text-muted-foreground">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-lg font-semibold">Recent Reports</h2>
          </div>

          {/* Search Reports */}
          <div className="mb-6 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10" />
              <ds-input
                placeholder="Search reports..."
                class="pl-9"
              />
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reports.map((report, index) => (
              <ds-report-card
                key={index}
                title={report.title}
                lastRun={report.lastRun}
                description={report.description}
              >
                <div slot="actions" className="flex gap-2 w-full">
                  <ds-button variant="outline" class="flex-1">
                    Edit report
                  </ds-button>
                  <ds-button variant="default" class="flex-1">
                    Run report
                  </ds-button>
                </div>
              </ds-report-card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayrollIntelligence;
