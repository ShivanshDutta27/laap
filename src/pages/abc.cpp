#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main(){
    int T; 
    cin >> T;
    while(T--){
        int n;
        cin >> n;

        vector<pair<long long, pair<int,int>>> cells;
        cells.reserve(n*n);
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= n; j++){
                long long w = 1LL * i * (n - i + 1) * j * (n - j + 1);
                cells.push_back({w, {i-1, j-1}});
            }
        }

        sort(cells.begin(), cells.end(),
             [](auto &A, auto &B){
                 return A.first > B.first;
             });

        vector<vector<int>> mat(n, vector<int>(n));
        for(int v = 0; v < (int)cells.size(); v++){
            int i = cells[v].second.first;
            int j = cells[v].second.second;
            mat[i][j] = v;
        }

        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                cout << mat[i][j] << (j+1<n?' ':'\n');
            }
        }
    }
    return 0;
}
